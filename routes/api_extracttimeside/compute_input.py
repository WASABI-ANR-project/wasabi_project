# compute_input.py
import sys
import json
import requests
from coreapi import Client
from coreapi.auth import TokenAuthentication

# api: token - schema => url
api_token_url = 'https://wasabi.telemeta.org/timeside/api-token-auth/'
api_schema_url = 'https://wasabi.telemeta.org/timeside/api/schema/'
auth = {'username': 'wasabi', 'password': 'Dywyept_ock0'}
r = requests.post(api_token_url, data=auth)
token = 'ba72b2e2570d61125b33b930aa2a15d7741fd540'

# coreapi client with the right token
auth = TokenAuthentication(scheme='Token', token=token)
client = Client(auth=auth)

# testing several request to the TimeSide core API
schema = client.get(api_schema_url)

arrayItems=[]
# create
def doCreate(_id,_params):
    keys = ['api', 'items', 'create']
    try:
        item = client.action(schema, keys, _params)
    except:
        arrayItems.append({"msg":"Error, an exception occurred"})
    else:
        arrayItems.append({"_id":_id.encode("utf-8"),"uuid":item['uuid'].encode("utf-8")})
    # finally:
        # print("The 'try except' is finished")

# read
def doRead(_uuid):
    keys = ['api', 'items', 'read']
    params = {'uuid': _uuid}
    item = client.action(schema, keys, params)
    print(item)

# delete
def doDelete(_uuid):
    keys = ['api', 'items', 'delete']
    params = {'uuid': _uuid}
    try:
        item = client.action(schema, keys, params)
    except:
        print("An exception occurred")
    else:
        print(_uuid+" was deleted")
    finally:
        print("The 'try except' is finished")

# list
def doList():
    keys = ['api', 'items', 'list']
    data = client.action(schema, keys)
    for item in data:
        print(item['title'] + '   ' + item['uuid'])

# Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    data = json.loads(lines[0])
    # Since our input would only be having one line, parse our JSON data from that
    return data

#Getting uuid of Provider and WASABI selection
def doGetUUIDWasabiSelection():
        keys = ['api', 'selections', 'list']
        for selec in client.action(schema,keys):
                if selec['title'] == 'WASABI':
                        #print(selec)
                        WASABI_selection = selec
        selection_uuid = WASABI_selection['uuid']
        return (selection_uuid)


#adding this track to the WASABI selection
def addWasabiTrack(_uuid_track_wasabi):
        selection_uuid=doGetUUIDWasabiSelection()
        keys = ['api', 'selections', 'update']
        params = {'uuid':selection_uuid, 'items':['/timeside/api/items/' + _uuid_track_wasabi + '/']}
        selec = client.action(schema,keys,params)


#Creating an Experience with pitch, spectrogram and mean analysis presets
def doCreateExperience():
        keys = ['api', 'experiences', 'create']
        aubio_pitch = '/timeside/api/presets/571df558-b0a2-461a-84c4-d2219d3ffe79/'
        spectrogram = '/timeside/api/presets/3d67b9b3-6f27-4fb9-af97-23e67dbd4a6e/'
        mean_dc_shift = '/timeside/api/presets/72465383-4bcb-453b-9d0c-dd07eaa3da5e/'

        params = {'title':'experience_WASABI', 'presets':[mean_dc_shift, aubio_pitch, spectrogram]}
        exp = client.action(schema,keys,params)
        exp_uuid = exp['uuid']


#Creating a task with the experience above and the item -- item_uuid -- 
def doCreateTask():
        WASABI_selection_uudi = doGetUUIDWasabiSelection()
        exp_uuid = 'a7815a9b-dc4a-46aa-8122-a72f5e7886da'
        PENDING = 2 # while initialising a task with status = 2, it is run directly

        keys = ['api', 'tasks', 'create']
        # params = {'item' : '/timeside/api/items/' + item_uuid + '/', 'experience': '/timeside/api/experiences/' + exp_uuid + '/','status':PENDING}
        params = {'selection' : '/timeside/api/selections/' + WASABI_selection_uudi + '/', 'experience': '/timeside/api/experiences/' + exp_uuid + '/','status':PENDING}
        task = client.action(schema,keys,params)

def doGetResults(item_uuid,preset_uuid):
        keys = ['api', 'results', 'list']
        params = {'search' : item_uuid + ' , ' + preset_uuid} #uuid separated with a white space or a comma
        result = client.action(schema,keys,params)
        return (result)


# deezer: /timeside/api/providers/de7b385e-bcbe-41a2-8d56-be9fc9395d37/
# youtube: /timeside/api/providers/13572f2f-70af-4a81-892b-1f29f0ca98ab/

def main():
    # get our data as an array from read_in()
    lines = read_in()
    
    # print(lines)
    # doDelete('fcb2e157-7187-49f7-8f2b-1739cf20adfc')

    for station in lines:
        # print(station['title'] + ' - ' + station['_id'])
        # print(station['urlDeezer'])

        # deezer - a garder
        doCreate(station['_id'],{
            'title': station['title'],
            'description': 'Music from '+station['name']+' - '+station['albumTitle'],
            'external_uri': station['urlDeezer'],
            'provider': '/timeside/api/providers/de7b385e-bcbe-41a2-8d56-be9fc9395d37/'
        })
        # print('-----')
        
        # youtube - a supprimer
        # doCreate({
        #     'title': station['title'],
        #     'description': 'Music from Michael Jackson',
        #     'external_uri': 'youtube.com/watch?v='+station['urlYouTube'],
        #     'provider': '/timeside/api/providers/de7b385e-bcbe-41a2-8d56-be9fc9395d37/'
        # })
    print(json.dumps(arrayItems))
    # doList()
    # print(doGetUUIDWasabiSelection())
    # doRead('17039105-41c9-4270-ad41-428a7446f568')
    # addWasabiTrack("17039105-41c9-4270-ad41-428a7446f568")
    # doCreateTask()

    # print(doGetResults('d69e9cee-b0f4-4fe4-9776-16ecbeb4def8','3d67b9b3-6f27-4fb9-af97-23e67dbd4a6e'))

# start process
if __name__ == '__main__':
    main()
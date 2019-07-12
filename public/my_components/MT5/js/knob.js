$(function($) {

                $(".knob").knob({
                    change : function (value) {
                        setMasterVolume(value);
                    },
                    release : function (value) {
                        setMasterVolume(value);
                    },
                    cancel : function () {
                        console.log("cancel : ", this);
                    }
                });
});
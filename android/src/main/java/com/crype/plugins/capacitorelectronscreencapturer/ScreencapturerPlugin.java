package com.crype.plugins.capacitorelectronscreencapturer;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Screencapturer")
public class ScreencapturerPlugin extends Plugin {

    private Screencapturer implementation = new Screencapturer();

    @PluginMethod
    public void getSources(PluginCall call) {
        JSObject response = new JSObject();

        response.put("platform", "android");

        call.resolve(response);
    }
}

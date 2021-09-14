import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(ScreencapturerPlugin)
public class ScreencapturerPlugin: CAPPlugin {
    private let implementation = Screencapturer()

    @objc func getSources(_ call: CAPPluginCall) {
        call.resolve([
            "platform": "ios"
        ])
    }
}

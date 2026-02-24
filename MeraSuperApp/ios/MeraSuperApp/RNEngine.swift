import Foundation
import React

final class RNEngine: NSObject, RCTBridgeDelegate {
    static let shared = RNEngine()
    private(set) var bridge: RCTBridge!

    private override init() {
        super.init()
        bridge = RCTBridge(delegate: self, launchOptions: nil)
    }

    func sourceURL(for bridge: RCTBridge!) -> URL! {
        #if DEBUG
        return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
        #else
        return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
        #endif
    }
}

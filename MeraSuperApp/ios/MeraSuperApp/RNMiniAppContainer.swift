import SwiftUI
import React

struct RNMiniAppContainer: UIViewRepresentable {
    let moduleName: String
    let initialProps: [String: Any]?

    func makeUIView(context: Context) -> UIView {
        let rootView = RCTRootView(
            bridge: RNEngine.shared.bridge,
            moduleName: moduleName,
            initialProperties: initialProps
        )
        rootView.backgroundColor = UIColor.systemBackground
        return rootView
    }

    func updateUIView(_ uiView: UIView, context: Context) {
    }
}

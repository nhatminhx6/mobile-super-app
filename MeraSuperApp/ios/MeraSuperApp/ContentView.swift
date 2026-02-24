import SwiftUI

struct MiniAppItem: Identifiable {
    let id = UUID()
    let title: String
    let subtitle: String
    let moduleName: String
    let initialProps: [String: Any]
}

struct ContentView: View {
    private let miniApps: [MiniAppItem] = [
        MiniAppItem(
            title: "Booking",
            subtitle: "Manage upcoming stays",
            moduleName: "miniapp.booking",
            initialProps: ["userId": "ios-usr-007", "source": "native-shell"]
        ),
        MiniAppItem(
            title: "Billing",
            subtitle: "Invoices and payment methods",
            moduleName: "miniapp.billing",
            initialProps: ["userId": "ios-usr-007", "source": "native-shell"]
        ),
        MiniAppItem(
            title: "Profile",
            subtitle: "Account details and preferences",
            moduleName: "miniapp.profile",
            initialProps: ["userId": "ios-usr-007", "source": "native-shell"]
        )
    ]

    var body: some View {
        NavigationView {
            List(miniApps) { app in
                NavigationLink(
                    destination: RNMiniAppContainer(
                        moduleName: app.moduleName,
                        initialProps: app.initialProps
                    )
                    .navigationBarTitle(app.title, displayMode: .inline)
                ) {
                    VStack(alignment: .leading, spacing: 4) {
                        Text(app.title)
                            .font(.headline)
                        Text(app.subtitle)
                            .font(.subheadline)
                            .foregroundColor(.secondary)
                    }
                    .padding(.vertical, 6)
                }
            }
            .navigationTitle("MeraSuperApp")
        }
    }
}

#Preview {
    ContentView()
}

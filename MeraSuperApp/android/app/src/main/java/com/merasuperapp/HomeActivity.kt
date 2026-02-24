package com.merasuperapp

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity

class HomeActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)

        findViewById<Button>(R.id.button_booking).setOnClickListener {
            openMiniApp("miniapp.booking")
        }

        findViewById<Button>(R.id.button_billing).setOnClickListener {
            openMiniApp("miniapp.billing")
        }

        findViewById<Button>(R.id.button_profile).setOnClickListener {
            openMiniApp("miniapp.profile")
        }
    }

    private fun openMiniApp(moduleName: String) {
        val intent = Intent(this, RNActivity::class.java)
        val props = Bundle().apply {
            putString("userId", "android-usr-009")
            putString("source", "native-shell")
            putString("deepLink", "app://$moduleName")
        }
        intent.putExtra(RNActivity.EXTRA_MODULE_NAME, moduleName)
        intent.putExtra(RNActivity.EXTRA_INITIAL_PROPS, props)
        startActivity(intent)
    }
}

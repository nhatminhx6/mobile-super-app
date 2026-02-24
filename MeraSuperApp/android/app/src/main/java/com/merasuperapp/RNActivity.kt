package com.merasuperapp

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.facebook.react.ReactRootView
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler

class RNActivity : AppCompatActivity(), DefaultHardwareBackBtnHandler {
    private lateinit var reactRootView: ReactRootView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val moduleName = intent.getStringExtra(EXTRA_MODULE_NAME) ?: "miniapp.booking"
        val initialProps = intent.getBundleExtra(EXTRA_INITIAL_PROPS)

        reactRootView = ReactRootView(this)
        reactRootView.startReactApplication(
            MainApplication.reactInstanceManager,
            moduleName,
            initialProps
        )

        setContentView(reactRootView)
    }

    override fun onResume() {
        super.onResume()
        MainApplication.reactInstanceManager.onHostResume(this, this)
    }

    override fun onPause() {
        super.onPause()
        MainApplication.reactInstanceManager.onHostPause(this)
    }

    override fun onDestroy() {
        super.onDestroy()
        reactRootView.unmountReactApplication()
        MainApplication.reactInstanceManager.onHostDestroy(this)
    }

    override fun onBackPressed() {
        MainApplication.reactInstanceManager.onBackPressed()
    }

    override fun invokeDefaultOnBackPressed() {
        super.onBackPressed()
    }

    companion object {
        const val EXTRA_MODULE_NAME = "moduleName"
        const val EXTRA_INITIAL_PROPS = "initialProps"
    }
}

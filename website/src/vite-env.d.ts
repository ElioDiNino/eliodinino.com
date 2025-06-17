/// <reference types="vite/client" />

interface ViteTypeOptions {
    strictImportMetaEnv: unknown
  }

  interface ImportMetaEnv {
    readonly VITE_RECAPTCHA_SITE_KEY: string
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }

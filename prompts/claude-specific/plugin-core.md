Design a plugin system.

Requirements:
- Admin can activate/deactivate plugins.
- Plugin metadata stored in D1.
- Plugins are statically available but dynamically activated.
- Frontend loads active plugins dynamically.

Schema:
plugins {
  id TEXT PRIMARY KEY,
  type TEXT,
  isActive BOOLEAN,
  config JSON,
  createdAt DATETIME
}

Implement:
- Plugin registry module
- Admin API to toggle plugin
- Frontend PluginLoader component
- Type-safe plugin interface

Keep plugin architecture extensible.

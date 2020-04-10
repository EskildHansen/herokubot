const checkPermissionRole = (role) => 
        role.permissions.has('ADMINISTRATOR') || 
        role.permissions.has('KICK_MEMBERS') || 
        role.permissions.has('BAN_MEMBERS') || 
        role.permissions.has('MANAGE_GUILD') || 
        role.permissions.has('MANAGE_CHANNELS')

module.exports = rolepermissions
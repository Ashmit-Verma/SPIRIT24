export default function verifyRoles(admin, roles) {
  return roles.includes(admin.role);
}

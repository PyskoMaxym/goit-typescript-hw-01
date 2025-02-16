export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }
  
  // Використовуємо Record для заміни попереднього об'єкта
  const RoleDescription: Record<UserRole, string> = {
    [UserRole.admin]: 'Admin User',
    [UserRole.editor]: 'Editor User',
    [UserRole.guest]: 'Guest User',
  };
  
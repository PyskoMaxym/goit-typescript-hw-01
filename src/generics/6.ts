type Errors = {
    email?: string[];
    firstName?: string[];
    lastName?: string[];
    phone?: string[];
  };
  
  type Form = {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    errors: Errors;
  };
  
  // Використовуємо Omit для створення типу Params, який не містить поле 'errors'
  type Params = Omit<Form, 'errors'>;
  
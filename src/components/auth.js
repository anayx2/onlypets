'use server';

export async function login(formData) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const email = formData.get('email');
  const password = formData.get('password');

  // Here you would typically:
  // 1. Validate the input
  // 2. Call your authentication API
  // 3. Set cookies/session
  // 4. Redirect on success

  console.log('Login attempt:', { email, password });
}

export async function register(formData) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get('name');
  const phone = formData.get('phone');
  const city = formData.get('city');
  const email = formData.get('email');
  const password = formData.get('password');

  // Here you would typically:
  // 1. Validate the input
  // 2. Call your registration API
  // 3. Set cookies/session
  // 4. Redirect on success

  console.log('Register attempt:', { name, phone, city, email, password });
}

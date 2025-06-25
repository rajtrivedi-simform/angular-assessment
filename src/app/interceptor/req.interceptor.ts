import { HttpInterceptorFn } from '@angular/common/http';

export const reqInterceptor: HttpInterceptorFn = (req, next) => {
  let token: string = '';
  if (typeof window != 'undefined') {
    token = localStorage.getItem('token') as string;
  }
  const reqClone = req.clone({
    headers: req.headers.set('authorization', `Bearer ${token}`),
  });
  return next(reqClone);
};

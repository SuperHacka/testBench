
from django.http import HttpResponse
from django.shortcuts import redirect

from account.models import Account

def unauthenticated_user(view_func):

    def wrapper_func(request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect('home')
        else:
            return view_func(request, *args, **kwargs)
    
    return wrapper_func

#for now this method only allow one group at a time

def allowed_users(allowed_roles=[]):
    def decorator(view_func):
        def wrapper_func(request, *args, **kwargs):

            role = None
            if request.user.role.exists():
                role = request.user.role.all()[0].name

            if role in allowed_roles:
                return view_func(request, *args, **kwargs)
            
            else: 
                return HttpResponse('You are not authorized')
        return wrapper_func
    return decorator

def admin_only(view_func):
    def wrapper_function(request, *args, **kwargs):

            role = Account.role

            if role == 'Admin':
                return view_func(request, *args, **kwargs)

            else:
                return redirect('home')
    
    return wrapper_function


"""
        #role = None
        if request.user.role.exists():
            role = request.user.role.all()[0].name

        if role == 'Customer':
            return redirect('index')

        if role == 'Admin':
                return view_func(request, *args, **kwargs)
    """
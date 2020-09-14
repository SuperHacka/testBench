from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth.models import User, auth, Group
from django.contrib.auth import login, authenticate, logout
from account.models import Account

from django.contrib.auth.decorators import login_required
from .decorators import unauthenticated_user, allowed_users, admin_only

#@unauthenticated_user
def signUp(request):

    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']

        if password1 == password2:
            if Account.objects.filter(username=username).exists():
                messages.info(request,'Username is taken')
                return redirect('signUp')
            elif Account.objects.filter(email=email).exists() :
                messages.info(request,'Email is taken')
                return redirect('signUp')
            else:
                user = Account.objects.create_user(username=username, password=password1,email=email)
                user.save();
                print('user created')
                messages.success(request,'Account is registered successfully')
                return redirect('login')
        

        else:
            messages.info(request,'Password not matching')
            return redirect('signUp')
            return redirect('/')  

    else:     
        return render(request, 'signUp.html', )


def index(request):

    return render(request, 'index.html', )

@login_required(login_url = 'login')
#@allowed_users(allowed_roles=['admin','technician','customer'])

def home(request):
    return render(request, 'home.html',)

@unauthenticated_user
def login(request):

    if  request.method == ('POST'):
        email = request.POST.get('email')
        password = request.POST.get('password')

# find out how to get the user post data
        #username = username in request.POST
        # password = password in request.POST

        user = auth.authenticate(username=email,password=password)
        

        if user is not None:
            auth.login(request, user)
            return redirect('home')

        else:
            messages.info(request,'Username or password is incorrect')
            return redirect('login')


    else:
        return render(request, 'login.html',)

def logoutUser(request):
    auth.logout(request)
    return redirect('login')

def password(request):
    return render(request, 'password.html',)

def register(request):
    return render(request, 'register.html',)


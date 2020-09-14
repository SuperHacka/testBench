from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages

from django.contrib.auth import login,authenticate

from account.models import Account

from django.contrib.auth.decorators import login_required
from iam.decorators import unauthenticated_user, allowed_users, admin_only


@login_required(login_url = 'login')
#k@admin_only
def adminTable(request):

     if request.method == 'POST':
          username = request.POST['username']
          email = request.POST['email']
          role = request.POST['role']
          group = request.POST['group']
          accessLevel = request.POST['accessLevel']
          password1 = request.POST['password1']
          password2 = request.POST['password2']

          if password1 == password2:
               if Account.objects.filter(username=username).exists():
                    messages.info(request,'Username is taken')
                    return redirect('home')
               elif Account.objects.filter(email=email).exists() :
                    messages.info(request,'Email is taken')
                    return redirect('home')   
               else:
                    user = Account.objects.create_user(username=username, password=password1,email=email,role=role,accessLevel=accessLevel,group=group)
                    user.save();
                    print('user created')
                    messages.success(request,'An account is created')
                    return redirect('home')
          else:
               messages.info(request,'Password not matching')
               return redirect('adminTable')
               return redirect('/')  

     else:
          
          obj = Account.objects.all()
          context = {
               'user_list' : obj
          }
          return render(request, 'adminTable.html',context) 

def updateAdmin(request,pk):
     
     context = {

     }
     return render(request, 'adminTable.html',context) 
               

@login_required(login_url = 'login')
def testTable(request):
    return render(request, 'testTable.html', )


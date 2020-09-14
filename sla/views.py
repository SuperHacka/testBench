from django.shortcuts import render,redirect
#from iam.decorators import unauthenticated_user, allowed_users, admin_only

def sla(request):
    return render(request, 'sla.html',)
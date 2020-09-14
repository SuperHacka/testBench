from django.shortcuts import render

from django.contrib.auth.decorators import login_required
#from iam.decorators import unauthenticated_user, allowed_users, admin_only

@login_required(login_url = 'login')
def incident_ticket_overview(request):
    return render(request, 'incident_overview.html', )

@login_required(login_url = 'login')
def incident_report(request):
    return render(request, 'incident_report.html', )

#@login_required(login_url = 'login')
#@allowed_users(allowed_roles=['Admin','Customer'])
def incident_form(request):
    return render(request, 'incident_form.html', )
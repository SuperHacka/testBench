from django.urls import path
from . import views

urlpatterns = [
    path("overview", views.incident_ticket_overview, name="incident_ticket_overview"),
    path("report", views.incident_report, name="incident_report"),
    path("form", views.incident_form, name="incident_form"),
]
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
# Register your models here.
from .models import *



class AccountAdmin(UserAdmin):

    # to display on the column
    list_display = ('email', 'username', 'role', 'group','access level','is_staff', 'is_Admin')
    #search specifier
    list_display = ('email', 'username', 'role', 'group')

    readonly_fields = ('date_joined','last_login')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

admin.site.register(Account,AccountAdmin)
from django.urls import path
from . import views
urlpatterns = [
    path('',views.dashboard,name='dashboard'),
    path('index/',views.index,name='index'),
    path('Customer_List/',views.Customer_List,name='Customer_List'),
    path('Customer_Edit/',views.Customer_Edit,name='Customer_Edit'),
    path('Customer_Create/',views.Customer_Create,name='Customer_Create'),
    path('Item_List/',views.Item_List,name='Item_List'),
    path('Supplier_List/',views.Supplier_List,name='Supplier_List'),
    path('puchaseOrder_List/',views.puchaseOrder_List,name='puchaseOrder_List'),
    path('PurchaseRequest_List/',views.PurchaseRequest_List,name='PurchaseRequest_List'),
    path('PurchaseOrder_Create/',views.PurchaseOrder_Create,name='PurchaseOrder_Create'),
    path('purchaseOrder_Edit/',views.purchaseOrder_Edit,name='purchaseOrder_Edit'),
    path('Supplier_Edit/',views.Supplier_Edit,name='Supplier_Edit'),
    path('Supplier_Create/',views.Supplier_Create,name='Supplier_Create'),
    path('Supplier_Detail/',views.Supplier_Detail,name='Supplier_Detail'),
    
]

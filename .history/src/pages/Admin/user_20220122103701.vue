<template>
<div class="main-wrapper main-wrapper-2">
       
        <!-- <div class="breadcrumb-area bg-gray-4 breadcrumb-padding-1">
            <div class="container">
                <div class="breadcrumb-content text-center">
                    <h2>My Account </h2>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><i class="ti-angle-right"></i></li>
                        <li>My Account </li>
                    </ul>
                </div>
            </div>
            <div class="breadcrumb-img-1">
                <img src="assets/images/banner/breadcrumb-1.png" alt="">
            </div>
            <div class="breadcrumb-img-2">
                <img src="assets/images/banner/breadcrumb-2.png" alt="">
            </div>
        </div> -->
        <!-- my account wrapper start -->
        <div class="my-account-wrapper pb-100 pt-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <!-- My Account Page Start -->
                        <div class="myaccount-page-wrapper">
                            <!-- My Account Tab Menu Start -->
                            <div class="row">
                                <div class="col-lg-3 col-md-4">
                                    <div class="myaccount-tab-menu nav" role="tablist">
                                        <router-link to="/admin">Dashboard</router-link>
                                        <router-link class="active"   to="/admin/user">user</router-link>
                                        <router-link to="/admin/product">products</router-link>
                                        <router-link to="/admin/article">articles</router-link>
                                        <router-link to="/admin/user">orders</router-link>
                                        <a href="#account-info" data-bs-toggle="tab">Account Details</a>
                                        <a href="login-register.html">Logout</a>
                                    </div>
                                </div>
                                <!-- My Account Tab Menu End -->
                                <!-- My Account Tab Content Start -->
                                <div class="col-lg-9 col-md-8">
                                    <div class="tab-content" id="myaccountContent">
                                        <!-- Single Tab Content Start -->
                                        <div class="tab-pane fade show active" id="orders" role="tabpanel">
                                            <div class="myaccount-content">
                                                <h3>Orders</h3>
                                                <div class="myaccount-table table-responsive text-center">
                                                    <table class="table table-bordered">
                                                        <thead class="thead-light">
                                                            <tr>
                                                                <th>Order</th>
                                                                <th>Date</th>
                                                                <th>Status</th>
                                                                <th>Total</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Aug 22, 2018</td>
                                                                <td>Pending</td>
                                                                <td>$3000</td>
                                                                <td><a href="cart.html" class="check-btn sqr-btn ">View</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>July 22, 2018</td>
                                                                <td>Approved</td>
                                                                <td>$200</td>
                                                                <td><a href="cart.html" class="check-btn sqr-btn ">View</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>June 12, 2017</td>
                                                                <td>On Hold</td>
                                                                <td>$990</td>
                                                                <td><a href="cart.html" class="check-btn sqr-btn ">View</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!-- My Account Tab Content End -->
                            </div>
                        </div> <!-- My Account Page End -->
                    </div>
                </div>
            </div>
        </div>
      
            
         
    </div></template>

<script>
export default {
  name: "admin_user",
  data() {
    return {};
  },
};
</script>

<style>
</style>
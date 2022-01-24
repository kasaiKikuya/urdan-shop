<template>
  <div class="main-wrapper main-wrapper-2">
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
                                                <h3>Articles</h3>
                                            
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
       
    </div>
</template>

<script>
export default {
  name: "admin_article",
  data() {
    return {};
  },
};
</script>

<style>
</style>
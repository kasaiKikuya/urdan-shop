<template>
  <b-form
    :labb-position="labelPosition"
    :labb-width="labelWidthFilter"
    :model="model"
    :rules="rules"
    @submit.native.prevent="doFilter"
    class="filter"
    ref="form"
  >
    <b-row>
      <b-col :lg="12" :md="16" :sm="24">
        <b-form-item :label="fields.id.label" :prop="fields.id.name">
          <b-input v-model="model[fields.id.name]"/>
        </b-form-item>
      </b-col>
      <b-col style="margin-bottom: -0.41px;" :lg="12" :md="16" :sm="24">
        <b-form-item  :label="fields.createdAtRange.label" :prop="fields.createdAtRange.name">
          <b-date-picker type="datetimerange" v-model="model[fields.createdAtRange.name]"></b-date-picker>
        </b-form-item>
      </b-col>
      <b-col :lg="12" :md="16" :sm="24">
        <b-form-item :label="fields.email.label" :prop="fields.email.name">
          <b-input v-model="model[fields.email.name]"/>
        </b-form-item>
      </b-col>
      <b-col :lg="12" :md="16" :sm="24">
        <b-form-item :label="fields.fullName.label" :prop="fields.fullName.name">
          <b-input v-model="model[fields.fullName.name]"/>
        </b-form-item>
      </b-col>
      <b-col :lg="12" :md="16" :sm="24">
        <b-form-item :label="fields.status.label" :prop="fields.status.name">
          <b-select placeholder v-model="model[fields.status.name]">
            <b-option :value="undefined">--</b-option>
            <b-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.status.options"
            ></b-option>
          </b-select>
        </b-form-item>
      </b-col>
      <b-col :lg="12" :md="16" :sm="24">
        <b-form-item :label="fields.role.label" :prop="fields.role.name">
          <b-select placeholder v-model="model[fields.role.name]">
            <b-option :value="undefined">--</b-option>
            <b-option
              :key="option.value"
              :label="option.label"
              :value="option.value"
              v-for="option in fields.role.options"
            ></b-option>
          </b-select>
        </b-form-item>
      </b-col>
    </b-row>

    <div class="filter-buttons">
      <b-button :disabled="loading" @click="doFilter" icon="b-icon-fa-search" type="primary">
        <app-i18n code="common.search"></app-i18n>
      </b-button>

      <b-button :disabled="loading" @click="doResetFilter" icon="b-icon-fa-undo">
        <app-i18n code="common.reset"></app-i18n>
      </b-button>
    </div>
  </b-form>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';
// import { FilterSchema } from '@/shared/form/filter-schema';
 
// import { UserModel } from '@/modules/auth/user-model';

// const { fields } = UserModel;

// const filterSchema = new FilterSchema([
//   fields.id,
//   fields.createdAtRange,
//   fields.email,
//   fields.fullName,
// ]);

export default {
  name: 'admin-user-filter',

  data() {
    return {
     
      model: {},
    };
  },

  computed: {
    // ...mapGetters({
    //   labelPosition: 'layout/labelPosition',
    //   labelWidthFilter: 'layout/labelWidthFilter',
    //   loading: 'iam/list/loading',
    //   filter: 'iam/list/filter',
    // }),

    // fields() {
    //   return fields;
    // },
  },

  async mounted() {
    // this.model = filterSchema.initialValues(
    //   this.filter,
    //   this.$route.query,
    // );

    // return this.doFilter();
  },

  methods: {
    // ...mapActions({
    //   doReset: 'iam/list/doReset',
    //   doFetch: 'iam/list/doFetch',
    // }),

    // async doResetFilter() {
    //   this.model = filterSchema.initialValues();
    //   this.$refs.form.clearValidate();
    //   return this.doReset();
    // },

    // async doFilter() {
    //   try {
    //     await this.$refs.form.validate();
    //     this.$refs.form.clearValidate();
    //   } catch (error) {
    //     return;
    //   }

    //   const filter = filterSchema.cast(this.model);
    //   return this.doFetch({
    //     filter,
    //   });
    // },

    
  },
};
</script>

<style>
</style>

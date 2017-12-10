require.config(
    {
        paths: {
            'jquery': './ext/jquery-3.2.1.min',
            'ajaxupload':'./ext/ajaxupload.3.5',
            'template-simple':'./ext/template-simple.min',
            'vue':'./ext/vue.min',
            "base":'base'
        }
    }
);

require(['jquery'],function ($) {
    console.log('You have access Jquery by using require()');
});
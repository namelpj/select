
(function() {

    $.extend($.fn, {

        //提示框组件
        alert: function(options) {

            var defaults = {
                tip: ''
            };

            var settings = $.extend(defaults, options || {}),
                $this;

            function initialize() {
                var HTML = '<div style="background-color: #fff;width: 70%;max-width:540px;margin: auto;position: fixed;left: 50%;top: 15%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align: center;border-radius: 5px;z-index:100000;display:table;">' +
                    '  <div style="display:table;width:100%; background-color: #49B6F1; border-radius:5px;-webkit-border-radius: 5px;;-moz-border-radius: 5px;"> ' +
                    '     <span style="display:table-cell;height:50px;line-height:50px;vertical-align:middle;border-radius:5px;-webkit-border-radius: 5px;;-moz-border-radius: 5px;text-align:left;font-size:1.6rem;color:#fff;background-color:#49B6F1;">'+
                    '       <i style="display:inline-block;width:24px;height: 24px; background: url(../images/tip.png) no-repeat;background-size:contain;-webkit-background-size:contain;-moz-background-size:contain;vertical-align: middle;margin: 0 10px;"></i>' + settings.tip +
                    '     </span>' +
                    '  </div>'+
                    '</div>';
                $this = $(HTML).appendTo($('body'));
            }
                function alertboxClose(){
                    $this.remove();
                }
               setTimeout( alertboxClose,3000);

            initialize();

        }
    });

})(jQuery);
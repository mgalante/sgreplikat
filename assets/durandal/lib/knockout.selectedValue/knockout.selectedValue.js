define(['knockout', 'jquery'],function(ko,$){

    ko.bindingHandlers.selectedValue = {
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext)
        {

            var value = valueAccessor()();
            var optionText = allBindings()["aoptionsText"];
            var optionsCaption = allBindings()["aoptionsCaption"];
            var optionsValue = allBindings()["aoptionsValue"];
            var options = allBindings()["aoptions"];
            debugger;
            for(var i=0; i < options.length;i++)
            {
                if(options[i][optionsValue] == value)
                {
                    $(element).text(options[i][optionText]);
                    return;
                }
            }
            $(element).text(optionsCaption);
        }
    };
});
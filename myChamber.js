define(function (require) {
    'use strict';

    const TabbedListChamber = require('common/platform/chamber/TabbedListChamber');

    let dataTree = [
        {
            text: 'Tab 1',
            icon: ``,
            enabled: true,
            selected: true,
            fetchInfo: {
                fetchFunction: "initialFirstTabData"
            }
        },
        {
            text: 'Tab 2',
            icon: `beer`,
            enabled: true,
            selected: false,
            _data_tree_branch: [{
                text: 'List Item 1',
                text1: 'Tab 2 List Item'
            },{
                text: 'List Item 2',
                text1: 'Tab 2 List Item'
            }]
        },
        {
            text: 'Tab 3',
            icon: `${window.MODULE_PATH}/icons/icon2.svg`,
            enabled: true,
            selected: false,
            _data_tree_branch: [{
                text: 'Chamber 2a',
                text1: "secondary",
                status: "status",
                status1: "status1",
                $id: 'chamber2a'
            },{
                text: 'List Item 2',
                text1: 'Tab 3 List Item'
            }]
        }
    ];

    const search = function (queryStr, selectedTab) {
        Log.log('search function');
        const places = [{
            text: 'Burger Master'
        },{
            text: 'Pizza Hut',
            checked: true
        },{
            text: 'Papa Johns',
            text1: 'More text'
        },{
            text: 'Kentucky Fried Chicken',
            status: 'status'
        },{
            text: 'Taco Bell',
            icons: ['bell']
        }];
        
        this.displaySearchResult(places, selectedTab);
    };

    return class MyChamber extends TabbedListChamber {
        searchDefault () {
            Log.log("search default");
            search("", 0);
        }

        initialFirstTabData () {
            search.call(this, "", 0);
            this.reset(dataTree);
            this.refresh();
        }

        data () {
            return dataTree;
        }

        getFetchFunctions () {
            return {
                initialFirstTabData: this.initialFirstTabData
            }
        }

        tabClick (model) {
            Log.log("index is ", this.getSelectedTabIndex() );
            Log.log("TAB CLICKED! ", model);

            let selectedTab = this.getSelectedTabIndex();

            switch (selectedTab) {
                case 1:
                    search.call(this, "sushi", selectedTab);
                    break;
                case 2:
                    search.call(this, "pizza", selectedTab);
                    break;
                case 3:
                    search.call(this, "chinese", selectedTab);
                    break;
                default:
                    break;
            }
        }

        // NOTE: itemClick now requires two parameters, with the actual item you click being the second.
        itemClick (listView, listItem) {
            Log.log(listItem);
        }

        displaySearchResult(data, selectedTab) {
            Log.log("displaySearchResult");

            dataTree[selectedTab]._data_tree_branch = data;
        }
    };
});

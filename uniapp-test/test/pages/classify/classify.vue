<template>
	<view class="classify">
		<view class="">
			分类页面
		</view>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                list:[
                    {
                        id:'001',
                        name:'节点1'
                    },
                    {
                        id:'0011',
                        name:'节点11',
                        parentId:'001'
                    },
                    {
                        id:'00111',
                        name:'节点111',
                        parentId:'0011'
                    },
                    {
                        id:'002',
                        name:'节点2'
                    },
                    {
                        id:'0022',
                        name:'节点22',
                        parentId:'002'
                    },
                    {
                        id:'00222',
                        name:'节点222',
                        parentId:'0022'
                    },
                    {
                        id:'003',
                        name:'节点3'
                    },
                    {
                        id:'0033',
                        name:'节点33',
                        parentId:'003'
                    },
                    {
                        id:'00333',
                        name:'节点333',
                        parentId:'0033'
                    },

                ]
            };
        },
        mounted(){
            this.generateTree(this.list,{id:'id',pid:'parentId',children:'children'});
        },
        methods:{
            /*
            {
                id:
                name:
                children:[
                    {
                        id:'',
                        name:'',
                        chilren:[
                            {
                                id:'',
                                name:'',
                            },
                            {
                                id:'',
                                name:''
                            }
                        ]
                    }
                ]
            }
            */
            generateTree(list,obj){
                var id = obj.id || 'id';
                var pid = obj.pid || 'pid';
                var children = obj.children || 'children';
                var idMap = {};
                var treeList = [];
                list.forEach(function (v) {
                    idMap[v[id]] = v;   //注意，此时idMap中保存的是引用，引用的是list数组中的数据，所以当idMap发生改变时，list中的数据也会发生改变，以此氪达到只需要遍历一次就完成所有的操作
                });
                list.forEach(function (v) {
                    var parent = idMap[v[pid]];
                    if (parent) {
                        !parent[children] && (parent[children] = []);
                        parent[children].push(v);
                    } else {
                        treeList.push(v);
                    }
                });
                // console.log(idMap)
                // console.log(treeList)
                // console.log(list)
                return treeList;

            }
        }
    }
</script>

<style lang="scss">
	.classify{
		width:100%;
		height:100%;
	}
</style>

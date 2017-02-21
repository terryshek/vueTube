<template>
    <md-layout md-gutter>
        <md-layout md-align="center" md-flex-medium="100">
            <md-card>
                <md-card-header>
                    <div class="md-title">People list</div>
                    <div class="md-subhead">Author by terryshek</div>
                </md-card-header>

                <md-card-content>
                    <md-list>
                        <md-list-item v-for="item in list">
                            {{item.name}} -- {{item.company}}
                            <div>
                                --
                                <router-link tag='a' :to="{ name: 'detail', params: { userId: item.guid }}">Detail</router-link>
                            </div>
                        </md-list-item>
                    </md-list>
                </md-card-content>
            </md-card>
        </md-layout>
    </md-layout>
</template>

<script>
    export default {
        name: 'people',
        computed: {
            list(){ 
                return this.$store.getters.getPeople
             }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
</style>
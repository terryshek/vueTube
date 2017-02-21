<template>
    <md-layout md-gutter md-align="center">
        <md-layout md-align="center" md-flex-medium="50">
            <md-card>
                <md-card-area>
                    <span class="md-caption">
                        <router-link to="/people">Homepage</router-link>
                    </span>
                    <md-card-header>
                        <div class="md-title"><img :src="person.picture" :alt="person.name"> {{ person.name }} </div>
                        <div class="md-subhead">{{ person.company }}</div>
                    </md-card-header>
                    <md-card-content>
                        <md-list-item>
                            <span>Age: {{ person.age }}</span>
                        </md-list-item>
                        <md-list-item>            
                            <span>Eye Colour: {{ person.eyeColor }}</span>
                        </md-list-item> 
                        <md-list-item>
                            <span>Email: <a :href="'mailto:' + person.email">{{ person.email }}</a></span>
                        </md-list-item>                        
                    </md-card-content>
                </md-card-area>
            </md-card>
        </md-layout>
    </md-layout>
</template>

<script>
    export default {
        name: 'detail',
        computed: {
            person() {
                let user = _.find(this.$store.getters.getPeople, { guid: this.$route.params.userId })
                console.log(user)
                return user
            }
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
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
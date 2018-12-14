<template>
    <v-container>
        <v-layout>

            <v-flex xs4>
                <Projects/>
            </v-flex>

            <v-flex xs8 ml-2>
                <Panel title="Tasks">
                    No slot content
                </Panel>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex';
    import router from '../router';
    import Panel from '@/components/Panel.vue';
    import Projects from '@/components/Projects.vue';

    export default {
        data() {
            return {
            }
        },
        components: {
            Panel,
            Projects,
        },
        mounted() {
            if (!this.isLoggedIn) {
                return router.push('/login');
            }
        },
        computed: {
            ...mapGetters('authentication', ['isLoggedIn']),
        }
    }
</script>

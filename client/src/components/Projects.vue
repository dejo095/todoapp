<template>
    <Panel title="Projects">
        <v-layout row wrap>
            <v-flex xs10>
                <v-text-field placeholder="Project Title" :value="newProjectTitle" @input="setNewProjectTitle"></v-text-field>
            </v-flex>
            <v-flex xs2>
                <v-btn class="mt-2" @click="createProject">Create</v-btn>
            </v-flex>
        </v-layout>

    </Panel>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import Panel from '@/components/Panel.vue';

export default {
    computed: {
        ...mapState('projects', ['newProjectTitle']),
    },
    components: {
        Panel,
    },
    methods: {
         ...mapMutations('projects', ['setNewProjectTitle']),
         ...mapActions('projects', ['createProject']),
    },
};
</script>

<style>

</style>

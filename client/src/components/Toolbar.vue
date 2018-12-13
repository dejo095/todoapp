<template>
    <v-toolbar color="green" dark fixed>
        <v-toolbar-title class="mr-3">Vue Todo</v-toolbar-title>
            <v-toolbar-items>
                <v-btn flat><v-icon class="mr-1">playlist_add_check</v-icon>Projects</v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat><v-icon class="mr-1">account_box</v-icon>Register</v-btn>
            <v-btn flat><v-icon class="mr-1">fingerprint</v-icon>Login</v-btn>
            <v-btn flat><v-icon class="mr-1">exit_to_app</v-icon>Logout</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {

}
</script>

<style>

</style>

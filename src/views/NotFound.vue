<template>
    <v-container class="text-center">
        <v-row>
            <v-col>
                <v-img src="@/assets/not-found.png" alt="Not Found" class="mb-5"></v-img>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <v-btn color="primary" @click="goHome">Go to Home</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'NotFound',
    setup() {
        const router = useRouter();
        const goHome = () => {
            router.push('/');
        };

        return { goHome };
    },
});
</script>

<style scoped>
h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}
p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
}
</style>
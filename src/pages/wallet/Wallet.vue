<template>
    <div>
        <b-form>
            <b-form-group
                label="Name:"
                label-for="name">
                <b-form-input
                        id="name"
                        v-model="wallet.name"
                        type="text"
                        required
                        placeholder="Wallet Name" />
                <b-button variant="primary" @click="save">Save</b-button>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
    import http from '../../../services/AxiosHelper'

    export default {
        data() {
            return {
                wallet: {
                    name: ""
                }
            }
        },
        methods: {
            save() {
                http.post('/wallet', this.wallet)
                    .then((response) => {
                        console.log(response);
                        alert(this.wallet.name);
                    });
            }
        }
    }
</script>

<style scoped>

</style>
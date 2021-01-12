<template>
    <li class="listItem">
        <div class="userLogoWrapper">
            <img src="@/assets/google.svg" class="userLogo" alt="user_logo">
        </div>
        <div class="userNameWrapper">
            <p class="userName">
                {{userItemData.name}}
            </p>
        </div>
    </li>
</template>
<script>
export default {
    name: "UsersListItem",
    props: {
        userItemData: Object
    },
    
}
</script>
<style lang="scss" scoped>
    .listItem {
        padding-top: 5px;
        padding-bottom: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .userLogoWrapper{
            height: 100%;
            padding: 5%;
            text-align: center;
            vertical-align: center;

            .userLogo {
                height: 100%;
                width: auto;
            }
        }
    }

</style>
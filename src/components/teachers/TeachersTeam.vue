<template>
    <div class="content">
        <TeamCard/>
        <!-- <div class="tech-card" v-for="teach in team" :key="teach.id">
            <div class="img"></div>
            <div class="text">
                <h2>{{ teach.name }}</h2>
                <p>{{ teach.description }}</p>
            </div>
        </div> -->
    </div>
</template>
<style lang="scss" scoped>
.content {
    width: 100%;
    padding: 60px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap:20px;
    flex-wrap: wrap;

    .tech-card {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        row-gap: 5px;
        filter: drop-shadow(0 0 10px #CC37F6);

        .img {
            width: 268px;
            height: 327px;
            background: #D9D9D9;
            border-radius: 25px;
        }

        .text {
            font-family: 'Courier New', Courier, monospace;
            h2 {
                color: #fff;
            }

            p {
                background: linear-gradient(87.34deg, #771CE6 -7.13%, #B430EC 93.6%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
}
</style>
<script>
import TeamCard from './TeamCard.vue';
export default {
    name: "teachersTeam",
    components: {
        TeamCard
    },
    
}
</script>
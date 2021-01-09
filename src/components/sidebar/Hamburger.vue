<template>
    <div class="container">
        <span class="bun"></span>
        <span class="bun"></span>
        <span class="bun"></span>        
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .container{
        --boxWidth: 3em;
        --boxHeight: 3em;
        /* background-color: blueviolet; */

        width: var(--boxWidth);
        height: var(--boxHeight);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* box-shadow: 5px 8px #a59f80; */
    }
    
    .bun{
        background-color:#d8ce99;
        width: calc(0.8 * var(--boxWidth));
        height: calc(0.2 * var(--boxHeight));
        margin: 0.1rem;
        border-radius: 1px;
        /* margin: 0.5em; */
        /* margin: 10px;      */
    }
</style>
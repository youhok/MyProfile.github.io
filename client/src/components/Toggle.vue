<template>
    <div>
        <input id="checkboxInput" type="checkbox" @click="toggleDark()" />
        <label class="toggleSwitch" for="checkboxInput">
        </label>
    </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();

const toggleDark = useToggle(isDark);

useDark

</script>

<style scoped>
/* darkmode Style   */
#checkboxInput {
    display: none;
}

.toggleSwitch {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50px;
    height: 17px;
    background-color: rgb(82, 82, 82);
    border-radius: 20px;
    cursor: pointer;
    transition-duration: .2s;
}

.toggleSwitch::after {
    content: "";
    position: absolute;
    height: 22px;
    width: 22px;
    left: 0px;
    background-color: rgb(41, 41, 41);
    border-radius: 50%;
    transition-duration: .2s;
    border: 2px solid rgb(82, 82, 82);
}

#checkboxInput:checked+.toggleSwitch::after {
    transform: translateX(100%);
    transition-duration: .2s;
    border: 2px solid var(--primary);
}

/* Switch background change */
#checkboxInput:checked+.toggleSwitch {
    background-color: var(--primary);
    transition-duration: .2s;
}
</style>
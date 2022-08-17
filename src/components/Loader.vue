<template>
    <div class="loader_outside">
        <div class="loader_stick" />
        <div class="loader_inside" />
    </div>
</template>

<style>
.loader_outside {
    width: 100px;
    height: 100px;
    background-color: black;
    border-radius: 50%;
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;


}

@-moz-keyframes spin {
    100% {
        -moz-transform: rotate(360deg);
    }
}

@-webkit-keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

.loader_inside {
    width: 70px;
    height: 70px;
    background-color: white;
    border-radius: 50%;
}

.loader_stick {
    position: absolute;
    width: 100px;
    height: 20px;
    background-color: white;
}
</style>
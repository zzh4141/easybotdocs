<template>
    <div v-if="templateInfo" class="server-body">
        <div class="server-card">
            <div class="build-version">{{ templateInfo.manifest.version }}</div>
            <div class="server-name">
                <!-- Avatar as an image -->
                <img v-if="templateInfo.manifest.icon !== undefined" :src="`${templateInfo.manifest.icon}`" :alt="templateInfo.manifest.name" class="avatar" />
                <label>{{ templateInfo.manifest.name }}</label>
            </div>
            <div>
                <p class="plugin-desc">{{ templateInfo.manifest.description }}</p>
            </div>
            <div class="status-and-tags">
                <div class="status">
                    <div>
                        <div class="status-tag">
                            <!-- Badge with color -->
                            <div class="badge" :style="{ backgroundColor: '#87d068' }"></div>
                            <span class="tag hoverable" style="color: green">{{ propsData.templateCount }}</span>
                            <span>个模板</span>
                        </div>
                        <div class="status-tag">
                            <div class="badge" :style="{ backgroundColor: '#87d068' }"></div>
                            <span class="tag hoverable" style="color: green">{{ propsData.dependencies.length }}</span>
                            <span>个依赖</span>
                        </div>
                    </div>
                </div>

                <div class="tags">
                    <div class="status-tag">
                        <div class="badge" :style="{ backgroundColor: '#87d068' }"></div>
                        {{ templateInfo.manifest.author.join(', ') }}
                    </div>
                </div>
            </div>

            <div class="tag-and-buttons">
                <div>
                    <span v-for="tag in templateInfo.manifest.tag" :key="tag" class="plugin-tag">{{ tag }}</span>
                </div>
                <div class="links">
                    <a v-if="templateInfo.manifest.content && !hideContent" :href="templateInfo.manifest.content">详细信息</a>
                    <a v-for="(link, index) in templateInfo.manifest.links" :key="index" :href="link.href">{{ link.name
                        }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServerCard',
    props: {
        templateInfo: {
            type: Object,
            required: true
        },
        propsData: {
            type: Object,
            required: true
        },
        hideContent:  {
            type: Boolean,
            required: false
        }
    }
};
</script>

<style scoped>
.links {
    display: flex;
    gap: 10px;
}

.server-body {
    .build-version {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 0.9em;
    }

    .server-card {
        border-radius: 5px;
        background-color: var(--vp-c-bg-soft);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        padding: 20px;
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
    }

    .server-name {
        font-size: 1.2em;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .avatar {
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }

    .status-indicator {
        display: inline-block;
        vertical-align: middle;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        font-size: 14px;
        line-height: 5px;
        text-align: center;
        margin-right: 5px;
    }

    .status-tag .status-indicator {
        background-color: gray;
    }

    .status-unsupported .status-indicator {
        background-color: red;
    }

    .status-warring .status-indicator {
        background-color: yellow;
    }

    .status-supported .status-indicator {
        background-color: green;
    }

    .badge {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 5px;
    }

    .tag {
        display: inline-block;
        margin: 5px 0;
        font-size: 0.9em;
        color: #555;
    }

    .hoverable {
        text-decoration: underline;
        cursor: pointer;
    }

    .tag-and-buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .status-and-tags {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .status {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .tags {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .tag-list {
        margin-top: 10px;
        width: 100%;
    }

    .plugin-desc {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        color: gray;
        transition: color 1s;
    }

    .popover-content {
        padding: 10px;
        border: 1px solid #ddd;
        background-color: #fff;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }

    .popover {
        cursor: pointer;
    }

    .plugin-tag {
        background-color: var(--vp-c-bg-soft);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        padding: 5px 10px;
        border-radius: 3px;
        margin-right: 5px;
        font-size: 0.9em;
    }
}
</style>
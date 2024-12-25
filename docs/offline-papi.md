# 离线变量

> [!WARNING] 必要条件
> 插件版本 `≥1.9.5-urgentfix`  
> 服务器版本 `≥1.15`

> [!IMPORTANT] 服务器版本
> 为什么是 1.15+?  
> 因为在 1.15 之前没有提供关于离线玩家数据的 API,则无法获取离线玩家数据!

离线变量是[Statistic](https://api.extendedclip.com/expansions/statistic/)变量的离线替代,旨在玩家离线时可以查询玩家统计数据。

## 基本用法

- 前缀: `ez-statistic`
- 无参查询: `ez-statistic_<变量名>`
- 参数查询: `ez-statistic_<变量名>$<参数名>=<参数值>$`
- 多参查询: `ez-statistic_<变量名>$<参名1>=<参值1>&<参名2>=<参值2>$`


### 有参变量(需指定实体)

> [!INFO] 我该怎么知道实体的 ID?
> 生物 ID 为 Bukkit 原版的 EntityType 的映射,要知道实体的 ID,请看[这里](https://jd.papermc.io/paper/1.21.1/org/bukkit/entity/EntityType.html)  
> 例: `CAT` `ENDER_DRAGON`  
> 例(屠龙数量): `%ez-statistic_KILL_ENTITY$e=ENDER_DRAGON$%`


| 描述                           | 用法                                             |
| ------------------------------ | ------------------------------------------------ |
| 被特定实体杀死的次数           | `%ez-statistic_ENTITY_KILLED_BY$e=实体ID$%`      |
| 杀死特定实体的数量             | `%ez-statistic_KILL_ENTITY$e=实体ID$%`           |

### 有参变量(需指定物品或方块)

> [!INFO] 我该怎么知道物品的 ID?
> 物品 ID 为 Bukkit 原版的 Material 的映射,要知道物品的 ID,请看[这里](https://jd.papermc.io/paper/1.21.1/org/bukkit/Material.html)  
> 例: `IRON_SWORD` `IRON_BLOCK`     
> 例(挖了多少残骸): `%ez-statistic_MINE_BLOCK$i=ANCIENT_DEBRIS$%`

| 描述                           | 用法                                             |
| ------------------------------ | ------------------------------------------------ |
| 抛弃特定物品的数量             | `%ez-statistic_DROP$i=任意物品$%`                |
| 捡起特定物品的数量             | `%ez-statistic_PICKUP$i=任意物品$%`              |
| 开采特定方块的数量             | `%ez-statistic_MINE_BLOCK$i=任意方块$%`          |
| 使用特定物品的数量             | `%ez-statistic_USE_ITEM$i=任意物品$%`            |
| 打破特定物品的数量             | `%ez-statistic_BREAK_ITEM$i=任意物品$%`          |
| 制作特定物品的数量             | `%ez-statistic_CRAFT_ITEM$i=任意物品$%`          |

### 无参变量

| 描述                           | 用法                                             |
| ------------------------------ | ------------------------------------------------ |
| 玩家造成的伤害总量             | `%ez-statistic_DAMAGE_DEALT%`                    |
| 玩家受到的伤害总量             | `%ez-statistic_DAMAGE_TAKEN%`                    |
| 玩家死亡次数                   | `%ez-statistic_DEATHS%`                          |
| 击杀生物的数量                 | `%ez-statistic_MOB_KILLS%`                       |
| 击杀玩家的数量                 | `%ez-statistic_PLAYER_KILLS%`                    |
| 捕鱼的数量                     | `%ez-statistic_FISH_CAUGHT%`                     |
| 繁殖动物的数量                 | `%ez-statistic_ANIMALS_BRED%`                    |
| 玩家离开游戏的次数             | `%ez-statistic_LEAVE_GAME%`                      |
| 跳跃次数                       | `%ez-statistic_JUMP%`                            |
| 抛弃物品的数量                 | `%ez-statistic_DROP_COUNT%`                      |
| 游戏内生存时间（分钟）         | `%ez-statistic_PLAY_ONE_MINUTE%`                 |
| 在世界中度过的时间（刻）       | `%ez-statistic_TOTAL_WORLD_TIME%`                |
| 行走距离（厘米）               | `%ez-statistic_WALK_ONE_CM%`                     |
| 在水上行走的距离（厘米）       | `%ez-statistic_WALK_ON_WATER_ONE_CM%`            |
| 下落距离（厘米）               | `%ez-statistic_FALL_ONE_CM%`                     |
| 潜行时间（刻）                 | `%ez-statistic_SNEAK_TIME%`                      |
| 爬升距离（厘米）               | `%ez-statistic_CLIMB_ONE_CM%`                    |
| 飞行距离（厘米）               | `%ez-statistic_FLY_ONE_CM%`                      |
| 在水下行走的距离（厘米）       | `%ez-statistic_WALK_UNDER_WATER_ONE_CM%`         |
| 乘坐矿车行驶的距离（厘米）     | `%ez-statistic_MINECART_ONE_CM%`                 |
| 乘船行驶的距离（厘米）         | `%ez-statistic_BOAT_ONE_CM%`                     |
| 骑猪行驶的距离（厘米）         | `%ez-statistic_PIG_ONE_CM%`                      |
| 骑马行驶的距离（厘米）         | `%ez-statistic_HORSE_ONE_CM%`                    |
| 冲刺的距离（厘米）             | `%ez-statistic_SPRINT_ONE_CM%`                   |
| 低姿态移动的距离（厘米）       | `%ez-statistic_CROUCH_ONE_CM%`                   |
| 使用鞘翅滑翔的距离（厘米）     | `%ez-statistic_AVIATE_ONE_CM%`                   |
| 自上次死亡以来经过的时间（刻） | `%ez-statistic_TIME_SINCE_DEATH%`                |
| 与村民对话的次数               | `%ez-statistic_TALKED_TO_VILLAGER%`              |
| 与村民交易的次数               | `%ez-statistic_TRADED_WITH_VILLAGER%`            |
| 吃掉的蛋糕片数                 | `%ez-statistic_CAKE_SLICES_EATEN%`               |
| 注满药水瓶的次数               | `%ez-statistic_CAULDRON_FILLED%`                 |
| 使用药水瓶的次数               | `%ez-statistic_CAULDRON_USED%`                   |
| 清洗盔甲的次数                 | `%ez-statistic_ARMOR_CLEANED%`                   |
| 清洗旗帜的次数                 | `%ez-statistic_BANNER_CLEANED%`                  |
| 与酿造台交互的次数             | `%ez-statistic_BREWINGSTAND_INTERACTION%`        |
| 与信标交互的次数               | `%ez-statistic_BEACON_INTERACTION%`              |
| 检查投掷器的次数               | `%ez-statistic_DROPPER_INSPECTED%`               |
| 检查漏斗的次数                 | `%ez-statistic_HOPPER_INSPECTED%`                |
| 检查分配器的次数               | `%ez-statistic_DISPENSER_INSPECTED%`             |
| 播放音符盒的次数               | `%ez-statistic_NOTEBLOCK_PLAYED%`                |
| 调整音符盒的次数               | `%ez-statistic_NOTEBLOCK_TUNED%`                 |
| 种植花盆的次数                 | `%ez-statistic_FLOWER_POTTED%`                   |
| 触发陷阱箱的次数               | `%ez-statistic_TRAPPED_CHEST_TRIGGERED%`         |
| 打开末影箱的次数               | `%ez-statistic_ENDERCHEST_OPENED%`               |
| 魔法附魔物品的次数             | `%ez-statistic_ITEM_ENCHANTED%`                  |
| 播放唱片的次数                 | `%ez-statistic_RECORD_PLAYED%`                   |
| 与熔炉交互的次数               | `%ez-statistic_FURNACE_INTERACTION%`             |
| 与工作台交互的次数             | `%ez-statistic_CRAFTING_TABLE_INTERACTION%`      |
| 打开箱子的次数                 | `%ez-statistic_CHEST_OPENED%`                    |
| 在床上睡觉的次数               | `%ez-statistic_SLEEP_IN_BED%`                    |
| 打开潜影箱的次数               | `%ez-statistic_SHULKER_BOX_OPENED%`              |
| 自上次休息以来经过的时间（刻） | `%ez-statistic_TIME_SINCE_REST%`                 |
| 游泳的距离（厘米）             | `%ez-statistic_SWIM_ONE_CM%`                     |
| 被吸收的造成伤害量             | `%ez-statistic_DAMAGE_DEALT_ABSORBED%`           |
| 被抵抗的造成伤害量             | `%ez-statistic_DAMAGE_DEALT_RESISTED%`           |
| 用盾牌格挡的伤害量             | `%ez-statistic_DAMAGE_BLOCKED_BY_SHIELD%`        |
| 被吸收的受到伤害量             | `%ez-statistic_DAMAGE_ABSORBED%`                 |
| 被抵抗的受到伤害量             | `%ez-statistic_DAMAGE_RESISTED%`                 |
| 清理潜影箱的次数               | `%ez-statistic_CLEAN_SHULKER_BOX%`               |
| 打开木桶的次数                 | `%ez-statistic_OPEN_BARREL%`                     |
| 与烈焰熔炉交互的次数           | `%ez-statistic_INTERACT_WITH_BLAST_FURNACE%`     |
| 与熏烟机交互的次数             | `%ez-statistic_INTERACT_WITH_SMOKER%`            |
| 与讲台交互的次数               | `%ez-statistic_INTERACT_WITH_LECTERN%`           |
| 与营火交互的次数               | `%ez-statistic_INTERACT_WITH_CAMPFIRE%`          |
| 与制图台交互的次数             | `%ez-statistic_INTERACT_WITH_CARTOGRAPHY_TABLE%` |
| 与织布机交互的次数             | `%ez-statistic_INTERACT_WITH_LOOM%`              |
| 与切石机交互的次数             | `%ez-statistic_INTERACT_WITH_STONECUTTER%`       |
| 敲响铃铛的次数                 | `%ez-statistic_BELL_RING%`                       |
| 触发袭击的次数                 | `%ez-statistic_RAID_TRIGGER%`                    |
| 袭击胜利的次数                 | `%ez-statistic_RAID_WIN%`                        |
| 与铁砧交互的次数               | `%ez-statistic_INTERACT_WITH_ANVIL%`             |
| 与磨石交互的次数               | `%ez-statistic_INTERACT_WITH_GRINDSTONE%`        |
| 击中目标的次数                 | `%ez-statistic_TARGET_HIT%`                      |
| 与锻造台交互的次数             | `%ez-statistic_INTERACT_WITH_SMITHING_TABLE%`    |
| 骑炽足兽行驶的距离（厘米）     | `%ez-statistic_STRIDER_ONE_CM%`                  |
var Discord = require("discord.js");
var bot = new Discord.Client();
// var fs = require("fs");
// var data = fs.readFileSync("bravefrontier_data/info.json");
// var json = JSON.parse(data);

bot.on("message", msg => {
  // Set the prefix
  let prefix = "!";
  // Exit and stop if it's not there
  if(!msg.content.startsWith(prefix)) return;
  // Exit if any bot
  if(msg.author.bot) return;

  if (msg.content.startsWith(prefix + "gif")) {
    msg.channel.sendMessage(("http://i.imgur.com/tTuK9I8.gif"));
  }

  // if (msg.content.startsWith(prefix + "help")) {
  //   msg.channel.sendMessage(
  //     "\n Command List : " +
  //     "\n 1. !list *text* *rarity*   - list every single unit whose name contain the text and rarity inputted " +
  //     "\n 2. !unit *id* \t\t\t  - Show unit detail whose id inputted" +
  //     "\n 3. !search *element* *rarity* *texts*   - Show unit detail which is filtered through element, rarity, and texts contained" +
  //     "\n 4. !mitigator \t\t\t  - Show what to type when looking for mitigator" +
  //     "\n 5. !sparker \t\t\t  - Show what to type when looking for sparker" +
  //     "\n 6. !healer \t\t\t  - Show what to type when looking for healer" +
  //     "\n ." +
  //     "\n ." +
  //     "\n ." +
  //     "\n 101. !alvin \t\t\t - Try me :)" +
  //     "\n 102. !avatar \t\t - Show user's profile picture (avatar)"
  //   );
  // }
  //
  // if (msg.content.startsWith(prefix + "avatar")) {
  //   msg.reply(msg.author.avatarURL);
  // }
  //
  // if (msg.content.startsWith(prefix + "mitigator")) {
  //   msg.reply("\n Type one of this : \n !search `element` `rarity` reduces damage \n !search `element` `rarity` damage reduction");
  // }
  //
  // if (msg.content.startsWith(prefix + "sparker")) {
  //   msg.reply("\n Type one of this : \n !search `element` `rarity` boosts spark damage \n !search `element` `rarity` spark critical " );
  // }
  //
  // if (msg.content.startsWith(prefix + "healer")) {
  //   msg.reply("\n Type one of this :" +
  //   "\n !search `element` `rarity` restores hp " +
  //   "\n !search `element` `rarity` gradually restores hp" +
  //   "\n !search `element` `rarity` fully restores hp" +
  //   "\n !search `element` `rarity` restores hp each turn" +
  //   "\n !search `element` `rarity` spark damage restores hp" +
  //   "\n !search `element` `rarity` absorbs hp" +
  //   "\n !search `element` `rarity` may restore HP" );
  // }
  //
  // if (msg.content.startsWith(prefix + "search")) {
  //   var count_search = 0;
  //   let [element, rarity, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10] = msg.content.split(" ").slice(1);
  //   var str_search = `${text1}` + " " + `${text2}` + " " + `${text3}` + " " + `${text4}` + " " + `${text5}` +
  //   " " + `${text6}` + " " + `${text7}` + " " + `${text8}` + " " + `${text9}` + " " + `${text10}`;
  //   for(var i = 0; i < 10; i++)
  //     str_search = str_search.replace(" undefined","");
  //   if( `${element}`.toLowerCase() == "fire" || `${element}`.toLowerCase() == "water" ||
  //       `${element}`.toLowerCase() == "earth" || `${element}`.toLowerCase() == "thunder" ||
  //       `${element}`.toLowerCase() == "light" || `${element}`.toLowerCase() == "dark") {
  //     if( `${rarity}` == 1 || `${rarity}` == 2 || `${rarity}` == 3 || `${rarity}` == 4 ||
  //       `${rarity}` == 5 || `${rarity}` == 6 || `${rarity}` == 7 || `${rarity}` == 8 ) {
  //       for (var key_search in json) {
  //         if( json[key_search]["element"] == `${element}` && json[key_search]["rarity"] == `${rarity}` && json[key_search]["kind"] == "normal") {
  //           var str_search_ls, str_search_bb, str_search_sbb, str_search_ubb, str_search_es;
  //
  //           if(`${rarity}` < 6 ) {
  //             str_search_ls = JSON.stringify(json[key_search]["leader skill"]["desc"]);
  //             str_search_bb = JSON.stringify(json[key_search]["bb"]["desc"]);
  //             if(
  //               str_search_ls.toLowerCase().includes(str_search.toLowerCase()) ||
  //               str_search_bb.toLowerCase().includes(str_search.toLowerCase())) {
  //               if(count_search < 8) {
  //                 msg.reply(
  //                   "\n Name \t\t\t\t : \t" + json[key_search]["name"] +
  //                   "\n Rarity \t\t\t\t : \t" + json[key_search]["rarity"] +
  //                   "\n Leader Skill \t   : \t" + json[key_search]["leader skill"]["desc"] +
  //                   "\n Brave Burst \t   : \t" + json[key_search]["bb"]["desc"] +
  //                   "\n http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_full_" + json[key_search]["id"] + ".png"
  //                 );
  //                 count_search++;
  //               }
  //             }
  //           } else if (`${rarity}` == 6) {
  //             str_search_ls = JSON.stringify(json[key_search]["leader skill"]["desc"]);
  //             str_search_bb = JSON.stringify(json[key_search]["bb"]["desc"]);
  //             str_search_sbb = JSON.stringify(json[key_search]["sbb"]["desc"]);
  //             if(
  //               str_search_ls.toLowerCase().includes(str_search.toLowerCase()) ||
  //               str_search_bb.toLowerCase().includes(str_search.toLowerCase()) ||
  //               str_search_sbb.toLowerCase().includes(str_search.toLowerCase())) {
  //               if(count_search < 8) {
  //                 msg.reply(
  //                   "\n Name \t\t\t\t\t\t   : \t" + json[key_search]["name"] +
  //                   "\n Rarity \t\t\t\t\t\t   : \t" + json[key_search]["rarity"] +
  //                   "\n Leader Skill \t\t\t\t : \t" + json[key_search]["leader skill"]["desc"] +
  //                   "\n Brave Burst \t\t\t\t : \t" + json[key_search]["bb"]["desc"] +
  //                   "\n Super Brave Burst \t : \t" + json[key_search]["sbb"]["desc"] +
  //                   "\n http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_full_" + json[key_search]["id"] + ".png"
  //                 );
  //                 count_search++;
  //               }
  //             }
  //           } else if (`${rarity}` > 6) {
  //             str_search_ls = JSON.stringify(json[key_search]["leader skill"  ]["desc"]);
  //             str_search_bb = JSON.stringify(json[key_search]["bb"]["desc"]);
  //             str_search_sbb = JSON.stringify(json[key_search]["sbb"]["desc"]);
  //             str_search_ubb = JSON.stringify(json[key_search]["ubb"]["desc"]);
  //             str_search_es = JSON.stringify(json[key_search]["extra skill"]["desc"]);
  //             if(
  //               str_search_ls.toLowerCase().includes(str_search.toLowerCase()) ||
  //               str_search_bb.toLowerCase().includes(str_search.toLowerCase()) ||
  //               str_search_sbb.toLowerCase().includes(str_search.toLowerCase()) ||
  //               str_search_ubb.toLowerCase().includes(str_search.toLowerCase()) ||
  //               str_search_es.toLowerCase().includes(str_search.toLowerCase())) {
  //               if(count_search < 8) {
  //                 msg.reply(
  //                   "\n Name \t\t\t\t\t\t   : \t" + json[key_search]["name"] +
  //                   "\n Rarity \t\t\t\t\t\t   : \t" + json[key_search]["rarity"] +
  //                   "\n Leader Skill \t\t\t\t : \t" + json[key_search]["leader skill"]["desc"] +
  //                   "\n Extra Skill \t\t\t\t    : \t" + json[key_search]["extra skill"]["desc"] +
  //                   "\n Brave Burst \t\t\t\t : \t" + json[key_search]["bb"]["desc"] +
  //                   "\n Super Brave Burst \t : \t" + json[key_search]["sbb"]["desc"] +
  //                   "\n Ultra Brave Burst \t  : \t" + json[key_search]["ubb"]["desc"] +
  //                   "\n http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_full_" + json[key_search]["id"] + ".png"
  //                 );
  //                 count_search++;
  //               }
  //             }
  //           }
  //         }
  //       }
  //     } else {
  //       msg.reply("Wrong input, 1-8 only");
  //       return;
  //     }
  //   } else {
  //     msg.reply("Wrong Element");
  //     return;
  //   }
  //   if(count_search == 0) {
  //     msg.reply("Unit not found, try different name or rarity");
  //   }
  // }
  //
  // if (msg.content.startsWith(prefix + "list")) {
  //   var count_list = 0;
  //   let [unit, rarity] = msg.content.split(" ").slice(1);
  //   if( `${unit}`.length > 2) {
  //     for (var key_list in json) {
  //       var str_list = JSON.stringify(json[key_list]["name"]);
  //       if(`${rarity}` == "all") {
  //         if ( str_list.toLowerCase().includes(`${unit}`.toLowerCase())) {
  //           if(count_list < 8) {
  //             msg.reply(
  //               "\n :id: " + json[key_list]["guide_id"] + " | " + json[key_list]["name"] + " (" + json[key_list]["rarity"] + ":star:) " + json[key_list]["cost"] + " Cost" +
  //               "\n http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_" + json[key_list]["id"] + ".png"
  //             );
  //             count_list++;
  //           }
  //         }
  //       } else {
  //         if ( str_list.toLowerCase().includes(`${unit}`.toLowerCase()) && json[key_list]["rarity"] == `${rarity}`) {
  //           if(count_list < 8) {
  //             msg.reply(
  //               "\n :id: " + json[key_list]["guide_id"] + " | " + json[key_list]["name"] + " (" + json[key_list]["rarity"] + ":star:) " + json[key_list]["cost"] + " Cost" +
  //               "\n http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_" + json[key_list]["id"] + ".png"
  //             );
  //             count_list++;
  //           }
  //         }
  //       }
  //     }
  //   } else {
  //     msg.reply("Please insert at least 3 characters");
  //   }
  //   if(`${rarity}` > 1 || `${rarity}` < 8 ) {
  //     if(count_list == 0) {
  //       msg.reply("Unit not found, try different name or rarity");
  //     }
  //   } else {
  //     if(count_list == 0) {
  //       msg.reply("Wrong rarity, 1-8 rarity only");
  //     }
  //   }
  // }
  //
  // if (msg.content.startsWith(prefix + "unit")) {
  //   var count_unit = 0;
  //   let [id] = msg.content.split(" ").slice(1);
  //   for (var key_unit in json) {
  //     if ( json[key_unit]["guide_id"] == `${id}`) {
  //       if ( json[key_unit]["rarity"] < 6 ) {
  //         if(count_unit < 8) {
  //           msg.reply(
  //             "\n :id: " + json[key_unit]["guide_id"] + " | " + json[key_unit]["name"] + " (" + json[key_unit]["rarity"] + ":star:) " + json[key_unit]["cost"] + " Cost" +
  //             "\n Leader Skill \t   : \t" + json[key_unit]["leader skill"]["desc"] +
  //             "\n Brave Burst \t   : \t" + json[key_unit]["bb"]["desc"] +
  //             "\n http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_full_" + json[key_unit]["id"] + ".png"
  //           );
  //           count_unit++;
  //         }
  //       } else if ( json[key_unit]["rarity"] == 6 ) {
  //         if(count_unit < 8) {
  //           msg.reply(
  //             "\n :id: " + json[key_unit]["guide_id"] + " | " + json[key_unit]["name"] + " (" + json[key_unit]["rarity"] + ":star:) " + json[key_unit]["cost"] + " Cost" +
  //             "\n Leader Skill \t\t\t\t : \t" + json[key_unit]["leader skill"]["desc"] +
  //             "\n Brave Burst \t\t\t\t : \t" + json[key_unit]["bb"]["desc"] +
  //             "\n Super Brave Burst \t : \t" + json[key_unit]["sbb"]["desc"] +
  //             "\n http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_full_" + json[key_unit]["id"] + ".png"
  //           );
  //           count_unit++;
  //         }
  //       } else {
  //         if(count_unit < 8) {
  //           msg.reply(
  //             "\n :id:  **" + json[key_unit]["guide_id"]  + "** | " + json[key_unit]["name"] + " (" + json[key_unit]["rarity"] + ":star:) " + json[key_unit]["cost"] + " Cost" +
  //             "\n Leader Skill \t\t\t\t : \t" + json[key_unit]["leader skill"]["desc"] +
  //             "\n Brave Burst \t\t\t\t : \t" + json[key_unit]["bb"]["desc"] +
  //             "\n Super Brave Burst \t : \t" + json[key_unit]["sbb"]["desc"] +
  //             "\n Ultra Brave Burst \t  : \t" + json[key_unit]["ubb"]["desc"] +
  //             "\n Extra Skill \t\t\t\t    : \t" + json[key_unit]["extra skill"]["desc"] +
  //             "\n http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_full_" + json[key_unit]["id"] + ".png"
  //           );
  //           count_unit++;
  //         }
  //       }
  //     }
  //   }
  //   if(`${id}`.match(/^[0-9]+$/) != null) {
  //     if(count_unit == 0) {
  //       msg.reply("Unit does/has not exist");
  //     }
  //   } else {
  //     msg.reply("Please insert numeric unit ID");
  //   }
  // }
});

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.login("MjU5MTg1MjI5MzQ3MDI4OTky.CzUIkg.HVfuGqL4QjKIEj7Pk4kUSkTpqBE");

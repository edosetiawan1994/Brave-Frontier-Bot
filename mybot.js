var Discord = require("discord.js");
var bot = new Discord.Client();
var fs = require("fs");
var data_bf = fs.readFileSync("bravefrontier_data/info.json");
var json_bf = JSON.parse(data_bf);
var data_op = require("./optc-db.github.io/common/data/units.js");
var special_op = require("./optc-db.github.io/common/data/details.js");
var families_op = require("./optc-db.github.io/common/data/families.js");
var cooldowns_op = require("./optc-db.github.io/common/data/cooldowns.js");
var units = data_op.units;
var details = special_op.details;
var families = families_op.families;
var cooldowns = cooldowns_op.cooldowns;

bot.on("message", msg => {
  // Set the prefix
  let prefix = "!";
  // Exit and stop if it's not there
  if(!msg.content.startsWith(prefix)) return;
  // Exit if any bot
  if(msg.author.bot) return;

  if (msg.content.startsWith(prefix + "gif"))
    msg.channel.sendMessage(("http://i.imgur.com/c5yeWVx.gif"));

  if (msg.content.startsWith(prefix + "help"))
    msg.channel.sendMessage(
      "\n Command List : " +
      "\n ========== BRAVE FRONTIER ==========" +
      "\n 1. !list *text* *rarity*   - list every single unit whose name contain the text and rarity inputted " +
      "\n 2. !unit *id* \t\t\t  - Show unit detail whose id inputted" +
      "\n 3. !search *element* *rarity* *texts*   - Show unit detail which is filtered through element, rarity, and texts contained" +
      "\n 4. !mitigator \t\t\t  - Show what to type when looking for mitigator" +
      "\n 5. !sparker \t\t\t  - Show what to type when looking for sparker" +
      "\n 6. !healer \t\t\t  - Show what to type when looking for healer" +
      "\n ." +
      "\n ." +
      "\n ." +
      "\n ============= ONE PIECE =============" +
      "\n 51.  !op_list *text* *rarity*   - list every single unit whose name contain the text and rarity inputted " +
      "\n 52.  !op_unit *id* \t\t\t  - Show unit detail whose id inputted" +
      "\n ." +
      "\n ." +
      "\n ." +
      "\n ================ MISC ================" +
      "\n 101. !gif \t\t\t - Try me :)" +
      "\n 102. !avatar \t\t - Show user's profile picture (avatar)"
    );
  
  if (msg.content.startsWith(prefix + "avatar"))
    msg.reply(msg.author.avatarURL);
  
  if (msg.content.startsWith(prefix + "mitigator"))
    msg.reply("\n Type one of this :" +
      " \n !search `element` `rarity` reduces damage" +
      " \n !search `element` `rarity` damage reduction" );
  
  if (msg.content.startsWith(prefix + "sparker")) {
    var sparker_string = "\n Type one of this : \n !search `element` `rarity` boosts spark damage \n !search `element` `rarity` spark critical "
    msg.reply(sparker_string);
  }
  
  if (msg.content.startsWith(prefix + "healer"))
    msg.reply("\n Type one of this :" +
    "\n !search `element` `rarity` restores hp " +
    "\n !search `element` `rarity` gradually restores hp" +
    "\n !search `element` `rarity` fully restores hp" +
    "\n !search `element` `rarity` restores hp each turn" +
    "\n !search `element` `rarity` spark damage restores hp" +
    "\n !search `element` `rarity` absorbs hp" +
    "\n !search `element` `rarity` may restore HP" );
  
  if (msg.content.startsWith(prefix + "search")) {
    var count_search = 0;
    let [element, rarity, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10] = msg.content.split(" ").slice(1);
    var str_search = `${text1}` + " " + `${text2}` + " " + `${text3}` + " " + `${text4}` + " " + `${text5}` +
    " " + `${text6}` + " " + `${text7}` + " " + `${text8}` + " " + `${text9}` + " " + `${text10}`;
    for(var i = 0; i < 10; i++)
      str_search = str_search.replace(" undefined","");
    if( `${element}`.toLowerCase() == "fire" || `${element}`.toLowerCase() == "water" ||
        `${element}`.toLowerCase() == "earth" || `${element}`.toLowerCase() == "thunder" ||
        `${element}`.toLowerCase() == "light" || `${element}`.toLowerCase() == "dark") {
      if( `${rarity}` == 1 || `${rarity}` == 2 || `${rarity}` == 3 || `${rarity}` == 4 ||
        `${rarity}` == 5 || `${rarity}` == 6 || `${rarity}` == 7 || `${rarity}` == 8 ) {
        for (var key_search in json_bf) {
          if( json_bf[key_search]["element"] == `${element}` && json_bf[key_search]["rarity"] == `${rarity}` && json_bf[key_search]["kind"] == "normal") {
            var str_search_ls, str_search_bb, str_search_sbb, str_search_ubb, str_search_es;
  
            if(`${rarity}` < 6 ) {
              str_search_ls = JSON.stringify(json_bf[key_search]["leader skill"]["desc"]);
              str_search_bb = JSON.stringify(json_bf[key_search]["bb"]["desc"]);
              if(
                str_search_ls.toLowerCase().includes(str_search.toLowerCase()) ||
                str_search_bb.toLowerCase().includes(str_search.toLowerCase())) {
                if(count_search < 8) {
                  msg.reply(
                    "\n Name \t\t\t\t : \t" + json_bf[key_search]["name"] +
                    "\n Rarity \t\t\t\t : \t" + json_bf[key_search]["rarity"] +
                    "\n Leader Skill \t   : \t" + json_bf[key_search]["leader skill"]["desc"] +
                    "\n Brave Burst \t   : \t" + json_bf[key_search]["bb"]["desc"] +
                    "\n http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_full_" + json_bf[key_search]["id"] + ".png"
                  );
                  count_search++;
                }
              }
            } else if (`${rarity}` == 6) {
              str_search_ls = JSON.stringify(json_bf[key_search]["leader skill"]["desc"]);
              str_search_bb = JSON.stringify(json_bf[key_search]["bb"]["desc"]);
              str_search_sbb = JSON.stringify(json_bf[key_search]["sbb"]["desc"]);
              if(
                str_search_ls.toLowerCase().includes(str_search.toLowerCase()) ||
                str_search_bb.toLowerCase().includes(str_search.toLowerCase()) ||
                str_search_sbb.toLowerCase().includes(str_search.toLowerCase())) {
                if(count_search < 8) {
                  msg.reply(
                    "\n Name \t\t\t\t\t\t   : \t" + json_bf[key_search]["name"] +
                    "\n Rarity \t\t\t\t\t\t   : \t" + json_bf[key_search]["rarity"] +
                    "\n Leader Skill \t\t\t\t : \t" + json_bf[key_search]["leader skill"]["desc"] +
                    "\n Brave Burst \t\t\t\t : \t" + json_bf[key_search]["bb"]["desc"] +
                    "\n Super Brave Burst \t : \t" + json_bf[key_search]["sbb"]["desc"] +
                    "\n http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_full_" + json_bf[key_search]["id"] + ".png"
                  );
                  count_search++;
                }
              }
            } else if (`${rarity}` > 6) {
              str_search_ls = JSON.stringify(json_bf[key_search]["leader skill"  ]["desc"]);
              str_search_bb = JSON.stringify(json_bf[key_search]["bb"]["desc"]);
              str_search_sbb = JSON.stringify(json_bf[key_search]["sbb"]["desc"]);
              str_search_ubb = JSON.stringify(json_bf[key_search]["ubb"]["desc"]);
              str_search_es = JSON.stringify(json_bf[key_search]["extra skill"]["desc"]);
              if(
                str_search_ls.toLowerCase().includes(str_search.toLowerCase()) ||
                str_search_bb.toLowerCase().includes(str_search.toLowerCase()) ||
                str_search_sbb.toLowerCase().includes(str_search.toLowerCase()) ||
                str_search_ubb.toLowerCase().includes(str_search.toLowerCase()) ||
                str_search_es.toLowerCase().includes(str_search.toLowerCase())) {
                if(count_search < 8) {
                  msg.reply(
                    "\n Name \t\t\t\t\t\t   : \t" + json_bf[key_search]["name"] +
                    "\n Rarity \t\t\t\t\t\t   : \t" + json_bf[key_search]["rarity"] +
                    "\n Leader Skill \t\t\t\t : \t" + json_bf[key_search]["leader skill"]["desc"] +
                    "\n Extra Skill \t\t\t\t    : \t" + json_bf[key_search]["extra skill"]["desc"] +
                    "\n Brave Burst \t\t\t\t : \t" + json_bf[key_search]["bb"]["desc"] +
                    "\n Super Brave Burst \t : \t" + json_bf[key_search]["sbb"]["desc"] +
                    "\n Ultra Brave Burst \t  : \t" + json_bf[key_search]["ubb"]["desc"] +
                    "\n http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_full_" + json_bf[key_search]["id"] + ".png"
                  );
                  count_search++;
                }
              }
            }
          }
        }
      } else {
        msg.reply("Wrong input, 1-8 only");
        return;
      }
    } else {
      msg.reply("Wrong Element");
      return;
    }
    if(count_search == 0) {
      msg.reply("Unit not found, try different name or rarity");
    }
  }
  
  if (msg.content.startsWith(prefix + "list")) {
    var count_list = 0;
    let [unit, rarity] = msg.content.split(" ").slice(1);
    var bf_list_full_string = "";
    if( `${unit}`.length > 2) {
      for (var key_list in json_bf) {
        var str_list = JSON.stringify(json_bf[key_list]["name"]);
        if(`${rarity}` == "all") {
          if ( str_list.toLowerCase().includes(`${unit}`.toLowerCase())) {
            bf_list_full_string = bf_list_full_string + 
              "\n :id: " + json_bf[key_list]["guide_id"] + " | " + json_bf[key_list]["name"] + " (" + json_bf[key_list]["rarity"] + ":star:) " + json_bf[key_list]["cost"] + " Cost"
            count_list++;
          }
        } else {
          if ( str_list.toLowerCase().includes(`${unit}`.toLowerCase()) && json_bf[key_list]["rarity"] == `${rarity}`) {
            bf_list_full_string = bf_list_full_string + 
              "\n :id: " + json_bf[key_list]["guide_id"] + " | " + json_bf[key_list]["name"] + " (" + json_bf[key_list]["rarity"] + ":star:) " + json_bf[key_list]["cost"] + " Cost"
            count_list++;
          }
        }
      }
      msg.reply(bf_list_full_string);
    } else {
      msg.reply("Please insert at least 3 characters");
    }
    if(`${rarity}` > 1 || `${rarity}` < 8 ) {
      if(count_list == 0) {
        msg.reply("Unit not found, try different name or rarity");
      }
    } else {
      if(count_list == 0) {
        msg.reply("Wrong rarity, 1-8 rarity only");
      }
    }
  }

  if (msg.content.startsWith(prefix + "op_list")) {
    var op_list_full_string = "";
    let [unit, rarity] = msg.content.split(" ").slice(1);
    var unit_id = 1;
    if( `${unit}`.length > 2) {
      for(i = 0; i < units.length; i++) {
        var id = i + 1;
        var str_list = units[i][0];
        if(families[i] != null) var str_families = families[i];
        else var str_families = "";
        if(`${rarity}` == "all") {
          if ( str_families.toLowerCase().includes(`${unit}`.toLowerCase()) && details[unit_id]['captain'] !== undefined) {
            op_list_full_string = op_list_full_string + 
              "\n :id: " + id + " | " + units[i][0] + " (" + units[i][3] + ":star:) " + units[i][4] + " Cost";
          }
        } else {
          if ( str_families.toLowerCase().includes(`${unit}`.toLowerCase()) && units[i][3] == `${rarity}` && details[unit_id]['captain'] !== undefined) {
            op_list_full_string = op_list_full_string + 
              "\n :id: " + id + " | " + units[i][0] + " (" + units[i][3] + ":star:) " + units[i][4] + " Cost"
          }
        }
        unit_id++;
      }
      if(op_list_full_string == "")
        msg.reply("Unit not found, try different name or rarity");
      else
        msg.reply(op_list_full_string);
    } else {
      msg.reply("Please insert at least 3 characters");
    }
  }
  
  if (msg.content.startsWith(prefix + "unit")) {
    var count_unit = 0;
    let [id] = msg.content.split(" ").slice(1);
    for (var key_unit in json_bf) {
      if ( json_bf[key_unit]["guide_id"] == `${id}`) {
        if ( json_bf[key_unit]["rarity"] < 6 ) {
          if(count_unit < 8) {
            msg.reply(
              "\n :id: " + json_bf[key_unit]["guide_id"] + " | " + json_bf[key_unit]["name"] + " (" + json_bf[key_unit]["rarity"] + ":star:) " + json_bf[key_unit]["cost"] + " Cost" +
              "\n Leader Skill \t   : \t" + json_bf[key_unit]["leader skill"]["desc"] +
              "\n Brave Burst \t   : \t" + json_bf[key_unit]["bb"]["desc"] +
              "\n http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_full_" + json_bf[key_unit]["id"] + ".png"
            );
            count_unit++;
          }
        } else if ( json_bf[key_unit]["rarity"] == 6 ) {
          if(count_unit < 8) {
            msg.reply(
              "\n :id: " + json_bf[key_unit]["guide_id"] + " | " + json_bf[key_unit]["name"] + " (" + json_bf[key_unit]["rarity"] + ":star:) " + json_bf[key_unit]["cost"] + " Cost" +
              "\n Leader Skill \t\t\t\t : \t" + json_bf[key_unit]["leader skill"]["desc"] +
              "\n Brave Burst \t\t\t\t : \t" + json_bf[key_unit]["bb"]["desc"] +
              "\n Super Brave Burst \t : \t" + json_bf[key_unit]["sbb"]["desc"] +
              "\n http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_full_" + json_bf[key_unit]["id"] + ".png"
            );
            count_unit++;
          }
        } else {
          if(count_unit < 8) {
            msg.reply(
              "\n :id:  **" + json_bf[key_unit]["guide_id"]  + "** | " + json_bf[key_unit]["name"] + " (" + json_bf[key_unit]["rarity"] + ":star:) " + json_bf[key_unit]["cost"] + " Cost" +
              "\n Leader Skill \t\t\t\t : \t" + json_bf[key_unit]["leader skill"]["desc"] +
              "\n Brave Burst \t\t\t\t : \t" + json_bf[key_unit]["bb"]["desc"] +
              "\n Super Brave Burst \t : \t" + json_bf[key_unit]["sbb"]["desc"] +
              "\n Ultra Brave Burst \t  : \t" + json_bf[key_unit]["ubb"]["desc"] +
              "\n Extra Skill \t\t\t\t    : \t" + json_bf[key_unit]["extra skill"]["desc"] +
              "\n http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_full_" + json_bf[key_unit]["id"] + ".png"
            );
            count_unit++;
          }
        }
      }
    }
    if(`${id}`.match(/^[0-9]+$/) != null) {
      if(count_unit == 0) {
        msg.reply("Unit does/has not exist");
      }
    } else {
      msg.reply("Please insert numeric unit ID");
    }
  }

  if (msg.content.startsWith(prefix + "op_unit")) {
    var count_unit = 0;
    var ability = "";
    var op_unit_full_string = "";
    let [unit_id] = msg.content.split(" ").slice(1);
    if(`${unit_id}`.match(/^[0-9]+$/) != null) {
      if(details[`${unit_id}`] === undefined) {
        msg.reply("Unit does/has not exist");
      } else {
        for(i = 0; i < units.length; i++) {
          // set unit id
          id = i + 1;

          // set unit's abilities
          if(`${unit_id}` == id){
            if(details[`${unit_id}`]['captain'] !== undefined)
              ability = ability + "\n Captain Ability : " + "\n\t" + details[`${unit_id}`]['captain'];
            if(details[`${unit_id}`]['sailor'] !== undefined)
              ability = ability + "\n Sailor Ability : " + "\n\t" + details[`${unit_id}`]['sailor'];
            if(details[`${unit_id}`]['special'][0]['description'] === undefined)
              ability = ability + "\n Special Ability : " + "\n\t" + details[`${unit_id}`]['special'];
            else {
              ability = ability + "\n Special Ability : "
              temp = 1;
              for(var key_special in details[`${unit_id}`]['special']){
                ability = ability + "\n\t Stage " + temp + " : \n\t\t" + details[`${unit_id}`]['special'][key_special]['description'];
                temp++;
              }
            }
          }

          // set id into 4 digit string
          if(id < 10) ids = "000"+id;
          else if(id >9 && id < 100) ids = "00"+id;
          else if(id > 99 && id < 1000) ids = "0"+id;
          else ids = id;

          // set unit's class
          if(units[i][2][1] != null && units[i][2][0].length != 1 && units[i][2][1].length != 1) unit_class = units[i][2][0] + units[i][2][1];
          else unit_class = units[i][2];
          unit_class = unit_class.toString().replace("Slasher", "<:slasher:264223664646520832>");
          unit_class = unit_class.toString().replace("Striker", "<:striker:264223664654778369>");
          unit_class = unit_class.toString().replace("Shooter", "<:shooter:264223662402568195>");
          unit_class = unit_class.toString().replace("Powerhouse", "<:powerhouse:264223664747053057>");
          unit_class = unit_class.toString().replace("Free Spirit", "<:freespirit:264223665208426496>");
          unit_class = unit_class.toString().replace("Fighter", "<:fighter:264223661714571274>");
          unit_class = unit_class.toString().replace("Evolver", "<:evolver:264223666298945539>");
          unit_class = unit_class.toString().replace("Driven", "<:driven:264223661609713664>");
          unit_class = unit_class.toString().replace("Cerebral", "<:cerebral:264223664910630922>");
          unit_class = unit_class.toString().replace("Booster", "<:booster:264223668333182979>");

          if(i+1 == `${unit_id}`){
            op_unit_full_string = 
              "\n :id: " + id + " | " + units[i][0] + " (" + units[i][3] + ":star:) " +
              "\n\t\t " + units[i][1] + " | " + units[i][4] + " Cost" + " | " + unit_class +
              ability +
              "\n http://onepiece-treasurecruise.com/wp-content/uploads/c" + ids + ".png";
          }
        }
      }
      msg.reply(op_unit_full_string);
    } else {
      msg.reply("Please insert numeric unit ID");
    }
  }
});

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.login("MjU5MTg1MjI5MzQ3MDI4OTky.CzUIkg.HVfuGqL4QjKIEj7Pk4kUSkTpqBE");

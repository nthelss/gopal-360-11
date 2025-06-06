var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen-1",
      "name": "KITCHEN (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1173841577416717,
          "pitch": 0.3012836558981675,
          "rotation": 0,
          "target": "1-hallway"
        },
        {
          "yaw": 2.3596317919775114,
          "pitch": 0.4834999096180521,
          "rotation": 0,
          "target": "2-tv"
        },
        {
          "yaw": 1.8118310349118545,
          "pitch": 0.11539384532864005,
          "rotation": 0,
          "target": "3-tv-l"
        },
        {
          "yaw": 2.986512924057533,
          "pitch": 0.2370555022856724,
          "rotation": 0,
          "target": "4-tv-r"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hallway",
      "name": "HALLWAY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.12503409708014246,
          "pitch": 0.41201805667269475,
          "rotation": 0,
          "target": "0-kitchen-1"
        },
        {
          "yaw": -0.9965266104172041,
          "pitch": 0.43495812214384344,
          "rotation": 0,
          "target": "2-tv"
        },
        {
          "yaw": -1.726114832487017,
          "pitch": 0.3565754968842647,
          "rotation": 0,
          "target": "3-tv-l"
        },
        {
          "yaw": -0.9060620023535702,
          "pitch": 0.13869555823109359,
          "rotation": 0,
          "target": "4-tv-r"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-tv",
      "name": "TV",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0809000040459047,
          "pitch": 0.4343281670028247,
          "rotation": 0,
          "target": "1-hallway"
        },
        {
          "yaw": 2.616942369760409,
          "pitch": 0.3438736276807237,
          "rotation": 0,
          "target": "0-kitchen-1"
        },
        {
          "yaw": -1.0300171703140908,
          "pitch": 0.3551307216311077,
          "rotation": 0,
          "target": "3-tv-l"
        },
        {
          "yaw": 0.7795978002793458,
          "pitch": 0.29775020737094593,
          "rotation": 0,
          "target": "4-tv-r"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-tv-l",
      "name": "TV L",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4772251591213532,
          "pitch": 0.479464581038723,
          "rotation": 0,
          "target": "2-tv"
        },
        {
          "yaw": 2.7712139490854435,
          "pitch": 0.4272699994375273,
          "rotation": 0,
          "target": "1-hallway"
        },
        {
          "yaw": 1.7439255554482838,
          "pitch": 0.12169782651846539,
          "rotation": 0,
          "target": "0-kitchen-1"
        },
        {
          "yaw": 0.6704365644967165,
          "pitch": 0.20739469955542766,
          "rotation": 0,
          "target": "4-tv-r"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-tv-r",
      "name": "TV R",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8326864967961569,
          "pitch": 0.2546255050042987,
          "rotation": 0,
          "target": "3-tv-l"
        },
        {
          "yaw": 0.015898968228800214,
          "pitch": 0.15589510671150464,
          "rotation": 0,
          "target": "1-hallway"
        },
        {
          "yaw": -0.6367254906480788,
          "pitch": 0.22739727481809524,
          "rotation": 0,
          "target": "0-kitchen-1"
        },
        {
          "yaw": -0.46416145919359053,
          "pitch": 0.32932672221173576,
          "rotation": 0,
          "target": "2-tv"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

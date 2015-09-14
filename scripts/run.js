#!/usr/bin/python -u
import os, json, pystache

carbon_config = {
  'data_dir': "/opt/graphite/storage/whisper/"
}

carbon_config_json = json.loads(os.environ['CARBON_CONFIG'])
if 'data_dir' in carbon_config_json:
  carbon_config['data_dir'] = carbon_config_json['data_dir']

with open ("/opt/graphite/conf/carbon.conf.mustache", "r") as carbon_config_template:
  with open ("/opt/graphite/conf/carbon.conf", "w") as carbon_config_out:
    data = carbon_config_template.read()
    carbon_config_out.write(pystache.render(data, carbon_config))

execfile('/sbin/my_init')

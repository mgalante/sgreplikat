<?php
class Generic_repository{

    public function update_or_create($entity, $json)
    {
        if($json["id"] != 0 )
        {
            $entity->get_by_id($json["id"]);
            if(!$entity->exists())
            {
                show_404();
                return;
            }
        }

        foreach($entity->fields as $field)
        {
            if(isset($json[$field]))
            {
                $entity->$field = $json[$field];
            }
        }
        $entity->save();
    }
}
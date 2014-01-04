<?php
class Generic_repository{

    public function update_or_create($entity, $json)
    {
       if(isset($json["id"]) && $json["id"] != 0 )
        {
            $entity->where("deshabilitado = 0")->get_by_id($json["id"]);
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

    public function delete($entity, $id)
    {
        if($id && $id != 0 )
        {
            $entity->get_by_id($id);

            if(!$entity->exists())
            {
                show_404();
                return;
            }
        }
        $entity->deshabilitado = 1;
        $entity->save();
    }


    /**
     * Convert a DataMapper model into an associative array.
     * If the specified fields includes a related object, the ids from the
     * objects are collected into an array and stored on that key.
     * This method does not recursively add objects.
     *
     * @param	DataMapper $object The DataMapper Object to convert
     * @param	array $fields Array of fields to include.  If empty, includes all database columns.
     * @return	array An associative array of the requested fields and related object ids.
     */
    function to_array($object, $fields = '')
    {
        // assume all database columns if $fields is not provided.
        if(empty($fields))
        {
            $fields = (array)$object->fields;
            foreach((array)$object->has_one as $key => $value)
            {
                $fields[] = $key;

            }

            foreach((array)$object->has_many as $key => $value)
            {
                $fields[] = $key;

            }
        }
        else
        {
            $fields = (array) $fields;
        }

        $result = array();

        foreach($fields as $f)
        {
            // handle related fields
            if(array_key_exists($f, $object->has_one) )
            {
                $result[$f] = ($object->{$f}->get_called) ? $this->to_array($object->{$f}) : null;
            }
            elseif(array_key_exists($f, $object->has_many))
            {
                $result[$f] = ($object->{$f}->get_called) ? $this->all_to_array($object->{$f}) : null;
            }
            else
            {
                // just the field.
                $result[$f] = $object->{$f};
            }
        }
        $result["type"] = strtolower(get_class($object));
        return $result;
    }



    /**
     * Convert the entire $object->all array result set into an array of
     * associative arrays.
     *
     * @see		to_array
     * @param	DataMapper $object The DataMapper Object to convert
     * @param	array $fields Array of fields to include.  If empty, includes all database columns.
     * @return	array An array of associative arrays.
     */
    function all_to_array($object, $fields = '')
    {
        // loop through each object in the $all array, convert them to
        // an array, and add them to a new array.
        $result = array();
        foreach($object as $o)
        {
            $result[] = $this->to_array($o,$fields);
        }
        return $result;
    }

}